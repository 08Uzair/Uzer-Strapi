import axios from "axios";

const API_URL = "http://localhost:1337/api/blog-users";
const apiKey =
  "360745c78fce7859ef20d3743df21f988021cb8ed040886ce587f0a130b6a3daa17bd324a5a45307f106fddcf33d1948e0ec4fa8188797848263f1743bdba0cdd534b0704f0652dd45af0dd03e044278a7b04cf19e45c651d054acbd98a8dd70b038306ed0bfb0504b3d484da3270b290df03ebb0e35acf214fe770423d03ee7";
export async function createUser(data) {
  try {
    const response = await axios.post(
      API_URL,
      { data },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    window.location.reload();
    return response.data;
  } catch (error) {
    console.log("Error creating blog:", error);
    throw error;
  }
}

export async function fetchUsers() {
  try {
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.log("Error fetching blogs:", error);
    throw error;
  }
}
export async function fetchUserById() {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.log("Error fetching blogs:", error);
    throw error;
  }
}

export async function updateUser(id, updatedData) {
  try {
    const response = await axios.put(
      `${API_URL}/${id}`,
      { data: updatedData },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log("Error updating blog:", error);
    throw error;
  }
}
export async function getUserDetails(id) {
  try {
    const response = await axios.get(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    return response.data.data;
  } catch (error) {
    console.log("Error getting blog details:", error);
    throw error;
  }
}

export async function deleteUser(id) {
  try {
    await axios.delete(`${API_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    });
    window.location.reload();
  } catch (error) {
    console.log("Error deleting blog:", error);
    throw error;
  }
}
