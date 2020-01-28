package grifts

import (
	"github.com/erincall/goatsnap/actions"

	"github.com/gobuffalo/buffalo"
)

func init() {
	buffalo.Grifts(actions.App())
}
