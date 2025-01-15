import { defineConfig } from "vite"; // Vite의 설정을 정의하는 함수
import react from "@vitejs/plugin-react"; // React 프로젝트를 위한 Vite 플러그인
import path from "path"; // 경로를 다루기 위한 Node.js 모듈

export default defineConfig({
  plugins: [
    react(), // React 프로젝트를 Vite로 빌드할 수 있도록 설정
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/Index.jsx"),
      // 모든 컴포넌트를 모아 놓은 진입점 파일
      name: "fisd-module",
      // 라이브러리 이름 (UMD 빌드 시 전역 이름으로 사용)
      fileName: (format) => `index.${format}.js`,
      // 형식별(`es`, `cjs` 등)로 생성될 파일 이름을 정의
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      // React와 ReactDOM을 외부 종속성으로 처리하여 번들에 포함하지 않음
      output: {
        globals: {
          react: "React",
          // React를 전역 변수로 참조
          "react-dom": "ReactDOM",
          // ReactDOM을 전역 변수로 참조
        },
      },
    },
  },
});
