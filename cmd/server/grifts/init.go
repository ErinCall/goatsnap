package grifts

import (
	"goatsnap/cmd/server/actions"

	"github.com/gobuffalo/buffalo"
)

func init() {
	buffalo.Grifts(actions.App())
}
