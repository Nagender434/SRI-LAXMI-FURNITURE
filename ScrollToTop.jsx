
Action: create_file({"file_text":"import { useEffect } from \"react\";\nimport { useLocation } from \"react-router-dom\";\n\nexport default function ScrollToTop() {\n  const { pathname } = useLocation();\n  useEffect(() => {\n    window.scrollTo(0, 0);\n  }, [pathname]);\n  return null;\n}\n","path":"/app/frontend/src/components/site/ScrollToTop.jsx"})
Observation: Create successful: /app/frontend/src/components/site/ScrollToTop.jsx
