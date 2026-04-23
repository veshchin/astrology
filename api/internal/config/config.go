package config

import "os"

type Config struct {
	ServiceName string
	Addr        string
}

func Load() Config {
	return Config{
		ServiceName: envOr("SERVICE_NAME", "astrology-api"),
		Addr:        envOr("API_ADDR", ":8080"),
	}
}

func envOr(key, fallback string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return fallback
}
