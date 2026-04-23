# Deploy

Артефакты развертывания, разделенные по стадии зрелости инфраструктуры.

## Рекомендуемая структура

```text
deploy/
├── docker-compose/
│   ├── compose.yml
│   └── traefik.yml
├── k3s-helm/
│   ├── Chart.yaml
│   ├── values.yaml
│   └── templates/
└── k8s-cloud/
    ├── base/
    └── overlays/
```

## Принцип

- Stage 1: Compose для локального и VPS-развертывания.
- Stage 2: K3s/Helm для постепенного масштабирования.
- Stage 3: Cloud K8s с отделением базового слоя и overlays.
