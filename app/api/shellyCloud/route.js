// app/api/shellyCloud/route.js

export async function GET() {
  try {
    const deviceId = process.env.SHELLY_DEVICE_ID;
    const authKey = process.env.SHELLY_AUTH_KEY;
    const serverUri = process.env.SHELLY_CLOUD_SERVER_URI;

    const url = `https://${serverUri}/device/status?id=${deviceId}&auth_key=${authKey}`;
    
    const response = await fetch(url);
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Shelly Cloud API error:', response.status, errorText);
      return new Response(JSON.stringify({ error: "Error fetching data" }), { status: 500 });
    }
    
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("Error fetching from Shelly Cloud:", error);
    return new Response(JSON.stringify({ error: "Error fetching data from Shelly Cloud" }), { status: 500 });
  }
}
