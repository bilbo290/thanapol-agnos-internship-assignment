import React, { useState, useMemo, useRef } from "react";
import { Group } from "@visx/group";
import { RectClipPath } from "@visx/clip-path";
import { voronoi, VoronoiPolygon } from "@visx/voronoi";
import { localPoint } from "@visx/event";
import Box from "@mui/material/Box";
import { absInitialPoints, absValidRegion } from "./absData";

const neighborRadius = 75;
const defaultMargin = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
};

const Diagram = ({ width, height, margin = defaultMargin }) => {
  var data = absInitialPoints;
  var validRegion = absValidRegion;
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const voronoiLayout = useMemo(
    () =>
      voronoi({
        x: (d) => d.x * innerWidth,
        y: (d) => d.y * innerHeight,
        width: innerWidth,
        height: innerHeight,
      })(data),
    [innerWidth, innerHeight]
  );
  const polygons = voronoiLayout.polygons();
  const svgRef = useRef(null);
  const [hoveredId, setHoveredId] = useState(null);
  const [neighborIds, setNeighborIds] = useState(new Set());
  const [hoveredActive, setHoveredActive] = useState(null);
  const [activeAll, setActiveAll] = useState(false);
  const [active, setActive] = useState(false);

  return width < 10 ? null : (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ position: "absolute", top: "-153px", left: "-250px", zIndex: "1000" }}>
        <svg width={width} height={height} ref={svgRef}>
          <RectClipPath id="voronoi_clip" width={innerWidth} height={innerHeight} rx={14} />
          <Group
            top={margin.top}
            left={margin.left}
            clipPath="url(#voronoi_clip)"
            onMouseMove={(event) => {
              if (!svgRef.current) return;
              const point = localPoint(svgRef.current, event);
              if (!point) return;
              const closest = voronoiLayout.find(point.x, point.y, neighborRadius);
              if (closest && closest.data.id !== hoveredId) {
                const neighbors = new Set();
                const cell = voronoiLayout.cells[closest.index];
                if (!cell) return;
                cell.halfedges.forEach((index) => {
                  const edge = voronoiLayout.edges[index];
                  const { left, right } = edge;
                  if (left && left !== closest) neighbors.add(left.data.id);
                  else if (right && right !== closest) neighbors.add(right.data.id);
                });
                setNeighborIds(neighbors);
                setHoveredId(closest.data.id);
              }
            }}
            onMouseLeave={() => {
              setHoveredId(null);
              setNeighborIds(new Set());
            }}
            onClick={() => {
              if (hoveredId !== "all") {
                setActiveAll(false);
                if (hoveredId === hoveredActive) {
                  setActive(!active);
                } else {
                  setActive(true);
                }
                setHoveredActive(hoveredId);
              } else {
                setActive(false);
                setActiveAll(!activeAll);
              }
            }}
          >
            {polygons.map((polygon) => (
              <VoronoiPolygon
                key={`polygon-${polygon.data.id}`}
                polygon={polygon}
                fill={
                  hoveredId && (polygon.data.id === hoveredId || neighborIds.has(polygon.data.id))
                    ? "transparent"
                    : "transparent"
                }
                stroke="#000"
                strokeWidth={0}
                fillOpacity={hoveredId && neighborIds.has(polygon.data.id) ? 0 : 1}
              />
            ))}
            {data.map(({ x, y, id }) => (
              <circle
                key={`circle-${id}`}
                r={5}
                cx={x * innerWidth}
                cy={y * innerHeight}
                fill={id === hoveredId ? "fuchsia" : "#000"}
                fillOpacity={0}
              />
            ))}
          </Group>
        </svg>
      </Box>

      {validRegion.includes(hoveredActive) && active && (
        <Box>
          <Box sx={{ position: "absolute", top: "-236px", left: "-200px", zIndex: "0" }}>
            <img src={`../img/${hoveredActive}-highlight.png`} alt="highlight" width="400px"></img>
          </Box>
          <Box sx={{ position: "absolute", top: "-235px", left: "-205px", zIndex: "0" }}>
            <img src={`../img/${hoveredActive}-active.png`} alt="active" width="400px"></img>
          </Box>
        </Box>
      )}
      {activeAll && (
        <Box>
          <Box sx={{ position: "absolute", top: "-231px", left: "-200px", zIndex: "0" }}>
            <img src={`../img/all-over-highlight.png`} alt="active all" width="400px"></img>
          </Box>

          {validRegion.map((region) => (
            <Box sx={{ position: "absolute", top: "-235px", left: "-200px", zIndex: "0" }}>
              <img src={`../img/${region}-highlight.png`} alt="test" width="400px" />;
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};
export default function Voronoi() {
  return (
    <div>
      <Diagram width={500} height={370} />
    </div>
  );
}
