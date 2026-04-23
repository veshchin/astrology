# astrology

Монорепозиторий для Astro-Analytical Engine: тонкий клиент, выделенный Go API Gateway, Rust compute core и изолированный `ephemeris-svc`.

## Текущее состояние

Каркас уже содержит исполняемые точки входа и базовые контракты:

- `api/` - Go API Gateway с `/healthz` и `/v1/meta`.
- `core/` - Rust Compute Core как отдельный workspace member.
- `ephemeris-svc/` - изолированный Rust-сервис для эфемеридного слоя.
- `frontend/` - React + Vite SPA с отдельной визуальной оболочкой.
- `proto/` - первые protobuf-контракты для внутренних gRPC-границ.
- `docs/` - архитектурное описание и документация.

## Быстрый старт

```bash
task api:run
task core:run
task ephemeris:run
task frontend:dev
```

Если `task` не установлен, можно запускать напрямую:

```bash
cd api && go run ./cmd/api
cd core && cargo run
cd ephemeris-svc && cargo run
cd frontend && npm run dev
```

## Структура

```text
astrology/
├── api/
├── core/
├── ephemeris-svc/
├── frontend/
├── proto/
├── deploy/
├── docs/
├── Taskfile.yml
├── Cargo.toml
└── go.work
```
