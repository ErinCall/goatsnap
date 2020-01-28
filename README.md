# Welcome to Buffalo!

Thank you for choosing Buffalo for your web development needs.

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

## Starting the Application

Buffalo ships with a command that will watch your application and automatically rebuild the Go binary and any assets for you. To do that run the "buffalo dev" command:

	$ buffalo dev

If you point your browser to [http://127.0.0.1:3000](http://127.0.0.1:3000) you should see a "Welcome to Buffalo!" page.

**Congratulations!** You now have your Buffalo application up and running.

## What Next?

We recommend you heading over to [http://gobuffalo.io](http://gobuffalo.io) and reviewing all of the great documentation there.

Good luck!

[Powered by Buffalo](http://gobuffalo.io)
