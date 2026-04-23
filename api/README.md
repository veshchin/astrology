# API Gateway

Go-сервис для аутентификации, rate limiting, WebSocket-стриминга и orchestration вызовов к Rust core.

## Рекомендуемая структура

```text
api/
├── cmd/
│   └── api/main.go
├── internal/
│   ├── config/
│   ├── transport/
│   │   ├── http/
│   │   ├── ws/
│   │   └── grpc/
│   ├── middleware/
│   ├── auth/
│   ├── service/
│   ├── repository/
│   └── observability/
├── migrations/
└── test/
```

## Принцип

- `cmd/` содержит только входную точку.
- `internal/` хранит реализацию, не предназначенную для импорта извне.
- gRPC-клиенты и доступ к Redis/PostgreSQL изолируются от HTTP/WS-транспорта.
