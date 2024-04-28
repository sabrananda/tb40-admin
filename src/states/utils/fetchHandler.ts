type FetchHandlerDto = {
  route: string;
  method?: string;
  body?: BodyInit | undefined;
  query?: string;
};
export async function FetchHandler(params: FetchHandlerDto): Promise<Response> {
  const url = {
    v1: process.env.NEXT_PUBLIC_API_V1_URL ?? "",
    default: process.env.NEXT_PUBLIC_API_URL ?? "",
  };
  switch (params.method) {
    case "POST":
      return await FetchPostHandler(params.route, params.body);

    case "DELETE":
      return await FetchDeleteHandler(params.route, params.query ?? "");

    default:
      return await FetchGetHandler(params.route);
  }

  async function FetchGetHandler(route: string): Promise<Response> {
    const response: Response = await fetch(url.v1 + route, {
      headers: {
        // Authorization: `Bearer ${useAuthStates.getState().access_token}`,
        Authorization: `Bearer`,
      },
    });
    return response;
  }

  async function FetchPostHandler(
    route: string,
    body: BodyInit | undefined
  ): Promise<Response> {
    const response: Response = await fetch(url.v1 + route, {
      method: "POST",
      headers: {
        Authorization: `Bearer `,
        // Authorization: `Bearer ${useAuthStates.getState().access_token}`,
        "Content-Type": "application/json",
      },
      body,
    });
    return response;
  }

  async function FetchDeleteHandler(
    route: string,
    query: string
  ): Promise<Response> {
    const response: Response = await fetch(url.v1 + route + "?" + query, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer `,
        // Authorization: `Bearer ${useAuthStates.getState().access_token}`,
      },
    });
    console.log(url.v1 + route + "?" + query);
    return response;
  }
}
