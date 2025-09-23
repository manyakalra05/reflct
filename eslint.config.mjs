import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [...compat.extends("next/core-web-vitals")];

export default eslintConfig;

<!-- Update 2025-02-04T10:31:32+05:30 -->
<!-- Update 2025-04-14T06:28:43+05:30 -->
<!-- Update 2025-09-23T13:43:19+05:30 -->