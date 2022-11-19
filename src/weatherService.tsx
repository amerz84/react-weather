const getWeather = async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/weather`,
      {
        method: "GET",
      }
    );

    if (!response.ok) {
      throw new Error(`Error status: ${response.status}`);
    }

    return await response.json();
  } catch (err: any) {
    console.log(err);
  }
}  

export default getWeather;