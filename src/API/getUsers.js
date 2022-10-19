const baseAddr = "http://127.0.0.1:3000";

export async function getUsersFromAPI(query = "") {
  const addr = query ? `${baseAddr}?term=${query}` : baseAddr;
  let data = [];

  try {
    const res = await fetch(addr);
    data = (await res.json()).map((user) => mapUserData(user));
    
  } catch (error) {
    console.error("Не читаются данные с сервера!");
  }

  return data;
}

function mapUserData(userApiData) {
  return {
    name: userApiData.name,
    phone: userApiData.phone,
    email: userApiData.email,
    hireDate: userApiData.hire_date,
    position: userApiData.position_name,
    department: userApiData.department,
    auxText: userApiData.aux_text,
  };
}
