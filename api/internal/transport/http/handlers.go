package httptransport

import (
	"encoding/json"
	"net/http"
	"time"

	"github.com/veshchin/astrology/api/internal/config"
)

type healthResponse struct {
	Service string    `json:"service"`
	Status  string    `json:"status"`
	Time    time.Time `json:"time"`
}

type metaResponse struct {
	Service string `json:"service"`
	Version string `json:"version"`
}

func RegisterHandlers(mux *http.ServeMux, cfg config.Config) {
	mux.HandleFunc("GET /healthz", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, http.StatusOK, healthResponse{
			Service: cfg.ServiceName,
			Status:  "ok",
			Time:    time.Now().UTC(),
		})
	})

	mux.HandleFunc("GET /v1/meta", func(w http.ResponseWriter, r *http.Request) {
		writeJSON(w, http.StatusOK, metaResponse{
			Service: cfg.ServiceName,
			Version: "dev",
		})
	})
}

func writeJSON(w http.ResponseWriter, status int, payload any) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	_ = json.NewEncoder(w).Encode(payload)
}
