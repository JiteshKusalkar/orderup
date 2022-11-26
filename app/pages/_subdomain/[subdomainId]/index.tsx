import { getVariablesByEnvironment } from "../../../utils/getVariablesByEnvironment";
import Admin from "./Admin";

interface Parameter {
  subdomainId: string;
}

interface Context {
  params: Parameter;
}

interface Subdomain {
  label: string;
  name: string;
  id: string;
}

interface SubdomainProps {
  subdomain: Subdomain;
}

export async function getStaticPaths() {
  console.log("paths", process.env);
  const paths = [
    {
      params: {
        subdomainId: getVariablesByEnvironment("admin-orderup", "admin"),
      },
    },
    {
      params: { subdomainId: getVariablesByEnvironment("app-orderup", "app") },
    },
  ];

  return {
    paths,
    fallback: "blocking",
  };
}

export const getStaticProps = async (context: Context) => {
  const allowedSubdomains = [
    {
      label: "Admin",
      name: getVariablesByEnvironment("admin-orderup", "admin"),
      id: "1",
    },
    {
      label: "App",
      name: getVariablesByEnvironment("app-orderup", "app"),
      id: "2",
    },
  ];

  const subdomain = allowedSubdomains.find(
    (p) => p.name === context.params.subdomainId
  );

  if (!subdomain) {
    return {
      notFound: true,
    };
  }

  return {
    props: { subdomain },
  };
};

export default function Tenant({ subdomain }: SubdomainProps) {
  return subdomain.id === "1" ? <Admin /> : <h1>App</h1>;
}
