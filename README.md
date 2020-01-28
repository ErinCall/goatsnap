# Goatsnap

Goatsnap is a golang port of [Catsnap](https://github.com/erincall/catsnap), which is so horribly bit-rotted it can no longer be maintained.

## Things to install first

* [Buffalo](https://gobuffalo.io/en/docs/getting-started/installation/)
* [Helm](https://github.com/helm/helm#install)
* Kubernetes (I've just used Docker Desktop)

## Database Setup

Build a local database:
```bash
helm repo add stable=https://kubernetes-charts.storage.googleapis.com/ # Only need to run this once
helm dependency update deployments/helm/goatsnap
helm upgrade --install --values deployments/helm/goatsnap/development_values.yaml goatsnap deployments/helm/goatsnap/
```

Port-forward to the database:

```bash
kubectl port-forward --namespace default svc/goatsnap-postgresql 5432:5432 >/dev/null &
```

## Assorted TODOs and notes

* serve /favicon.ico as /assets/images/favicon.ico (some kind of serve_static directive?)
* creating the favicon.ico:

```fish
# brew install imagemagick
for size in 16 32 48 64 152
    convert favicon-full.png -resize $size"x"$size -filter spline -unsharp 0x6+0.5+0  favicon-"$size".png
end
convert favicon-{16,32,48,64,152}.png favicon.ico
rm favicon-{16,32,48,64,152}.png
```
