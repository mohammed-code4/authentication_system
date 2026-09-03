import { Card, CardHeader, CardTitle } from "@/components/ui/Card";

const Home = () => {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold">Welcome Back! 👋</CardTitle>

        <p className="mt-2 text-muted-foreground">
          You’re successfully logged in. Enjoy exploring the application!
        </p>

        <p className="mt-6 text-sm text-muted-foreground">
          Authentication System crafted by{" "}
          <a
            href="https://www.linkedin.com/in/mohammed-hussein-9503a7410/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            Mohammed Hussein
          </a>
        </p>

        <p className="mt-3 text-sm text-muted-foreground">
          Thank you for using this application. ❤️
        </p>
      </CardHeader>
    </Card>
  );
};

export default Home;
