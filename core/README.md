# Compute Core

Rust-контур для CPU-bound вычислений, оркестрации gRPC-вызовов и сборки прикладной математики.

## Рекомендуемая структура

```text
core/
├── Cargo.toml
├── src/
│   ├── lib.rs
│   ├── bin/
│   │   └── core/main.rs
│   ├── domain/
│   ├── application/
│   ├── adapters/
│   │   ├── grpc/
│   │   └── ephemeris/
│   └── math/
├── benches/
└── tests/
```

## Принцип

- `lib.rs` держит доменную логику и use-cases.
- `bin/` содержит только bootstrap и wiring.
- Математика и интеграции не смешиваются в один слой.
