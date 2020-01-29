package actions

import "github.com/gobuffalo/buffalo"

// ImageCreate default implementation.
func ImageCreate(c buffalo.Context) error {
	return c.Render(200, r.HTML("image/create.html"))
}
