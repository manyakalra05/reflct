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
<!-- Update 2024-11-14T11:35:12+05:30 -->
<!-- Update 2024-12-22T18:00:32+05:30 -->
<!-- Update 2025-01-08T18:03:44+05:30 -->
<!-- Update 2025-01-11T07:03:48+05:30 -->
<!-- Update 2025-01-25T18:06:56+05:30 -->
<!-- Update 2025-02-07T17:05:01+05:30 -->