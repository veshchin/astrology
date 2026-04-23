package main

import (
	"context"
	"os"
	"os/signal"
	"syscall"

	"github.com/veshchin/astrology/api/internal/config"
	"github.com/veshchin/astrology/api/internal/observability"
	"github.com/veshchin/astrology/api/internal/server"
)

func main() {
	cfg := config.Load()
	logger := observability.NewLogger(os.Stdout)
	srv := server.New(cfg, logger)

	ctx, stop := signal.NotifyContext(context.Background(), os.Interrupt, syscall.SIGTERM)
	defer stop()

	if err := srv.Run(ctx); err != nil {
		logger.Error("api gateway stopped", "error", err)
		os.Exit(1)
	}
}
