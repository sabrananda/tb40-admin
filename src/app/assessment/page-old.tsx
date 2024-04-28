export default async function Form() {
  const pernyataan = await getPernyataan();

  return (
    <div>
      <div>
        {pernyataan.map((data, idx) => (
          <div key={idx}>{data.pernyataan}</div>
        ))}
      </div>
    </div>
  );
}

type Pernyataan = {
  id: number;
  pernyataan: string;
};

async function getPernyataan(): Promise<Pernyataan[]> {
  try {
    const data = await fetch(
      process.env.NEXT_PUBLIC_API_V1_URL + "/bakat40/pernyataan"
    );
    const pernyataan: Pernyataan[] = await data.json();
    console.log("dirender");
    return pernyataan;
  } catch (error) {
    return [];
  }
}
