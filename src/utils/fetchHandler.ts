type FetchHandlerDto = {
  route: string;
  method?: string;
  body?: BodyInit | undefined;
  query?: string;
};
export async function FetchHandler(params: FetchHandlerDto): Promise<Response> {
  const url =
    process.env.NODE_ENV === "development"
      ? process.env.NEXT_PUBLIC_API_V1_URL_DEV
      : process.env.NEXT_PUBLIC_API_V1_URL_PROD;

  switch (params.method) {
    case "POST":
      return await FetchPostHandler(params.route, params.body);

    case "DELETE":
      return await FetchDeleteHandler(params.route, params.query ?? "");

    default:
      return await FetchGetHandler(params.route);
  }

  async function FetchGetHandler(route: string): Promise<Response> {
    const response: Response = await fetch(url + route, {
      headers: {
        // Authorization: `Bearer ${useAuthStates.getState().access_token}`,
        Authorization: `Bearer`,
      },
      //   mode: "cors",
      credentials: "include",
    });
    return response;
  }

  async function FetchPostHandler(
    route: string,
    body: BodyInit | undefined
  ): Promise<Response> {
    const response: Response = await fetch(url + route, {
      method: "POST",
      headers: {
        // Authorization: `Bearer `,
        "Content-Type": "application/json",
      },
      mode: "cors",
      credentials: "include",
      body,
    });
    return response;
  }

  async function FetchDeleteHandler(
    route: string,
    query: string
  ): Promise<Response> {
    const response: Response = await fetch(url + route + "?" + query, {
      method: "DELETE",
      //   headers: {
      //     Authorization: `Bearer `,
      //   },
    });
    console.log(url + route + "?" + query);
    return response;
  }
}
