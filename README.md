# astrology

Монорепозиторий для Astro-Analytical Engine: тонкий клиент, выделенный Go API Gateway, Rust compute core и изолированный `ephemeris-svc`.

## Что лежит в репозитории

- `api/` - Go API Gateway: аутентификация, WebSocket, rate limiting, orchestration.
- `core/` - Rust Compute Core: математические расчеты и gRPC-клиенты.
- `ephemeris-svc/` - изолированный сервис для Swiss Ephemeris.
- `frontend/` - React + Vite SPA и оффлайн-кэш.
- `proto/` - версионированные protobuf-контракты.
- `deploy/` - артефакты развертывания по стадиям.
- `docs/` - архитектура, ADR и эксплуатационные заметки.

## Рекомендуемая структура

```text
astrology/
├── api/
│   ├── cmd/api/main.go
│   ├── internal/
│   │   ├── config/
│   │   ├── transport/
│   │   │   ├── http/
│   │   │   ├── ws/
│   │   │   └── grpc/
│   │   ├── middleware/
│   │   ├── auth/
│   │   ├── service/
│   │   ├── repository/
│   │   └── observability/
│   ├── migrations/
│   └── test/
├── core/
│   ├── Cargo.toml
│   ├── src/
│   │   ├── lib.rs
│   │   ├── bin/core/main.rs
│   │   ├── domain/
│   │   ├── application/
│   │   ├── adapters/
│   │   └── math/
│   ├── benches/
│   └── tests/
├── ephemeris-svc/
│   ├── Cargo.toml
│   ├── src/
│   │   ├── lib.rs
│   │   ├── bin/ephemeris-svc/main.rs
│   │   ├── ffi/
│   │   └── service/
│   └── tests/
├── frontend/
│   ├── index.html
│   ├── package.json
│   ├── src/
│   │   ├── app/
│   │   ├── pages/
│   │   ├── widgets/
│   │   ├── features/
│   │   ├── entities/
│   │   ├── shared/
│   │   ├── processes/
│   │   └── styles/
│   └── public/
├── proto/
│   └── astro/v1/*.proto
├── deploy/
│   ├── docker-compose/
│   ├── k3s-helm/
│   └── k8s-cloud/
├── docs/
│   ├── ARCHITECTURE.md
│   ├── adr/
│   └── runbooks/
└── Taskfile.yml
```

## Конвенции по подсистемам

- Go: бинарник в `cmd/`, вся прикладная логика в `internal/`, внешние интеграции изолированы за интерфейсами.
- Rust: workspace-ориентированная структура, `lib.rs` как ядро, `bin/` только для точек входа.
- Frontend: feature-sliced layout, локальный кэш и визуализация отдельно от бизнес-потока.
- Proto: версионирование по домену и версии API, без смешения experimental и stable контрактов.
- Deploy: отдельные папки для Compose, K3s и cloud K8s, чтобы стадии не перемешивались.

## Статус

Сейчас это стартовый scaffold. Следующий шаг - развернуть реальные пакеты и сервисы по этой структуре.
