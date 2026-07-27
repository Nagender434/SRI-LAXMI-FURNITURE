
Action: create_file({"file_text":"import { ReactLenis } from \"lenis/react\";\n\nexport default function SmoothScroll({ children }) {\n  return (\n    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothWheel: true }}>\n      {children}\n    </ReactLenis>\n  );\n}\n","path":"/app/frontend/src/components/site/SmoothScroll.jsx"})
Observation: Create successful: /app/frontend/src/components/site/SmoothScroll.jsx
