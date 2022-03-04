import { FunctionComponent } from "react";
import { InfrastructureType } from "./enums";


const infrastructureDescriptions: Record<InfrastructureType, string[]> = {
  [InfrastructureType.SelfHosted]: ["Self hosted"],
  [InfrastructureType.Managed]: ["Managed"],
  [InfrastructureType.Serverless]: ["Serverless"],
};

export const Infrastructure: FunctionComponent<{
  infrastructure: InfrastructureType;
}> = ({ infrastructure }) => {

  return (<>
    <h2>{infrastructure}</h2>
    { infrastructureDescriptions[infrastructure].map(description => <p>{description}</p>) }
  </>
  );
};
