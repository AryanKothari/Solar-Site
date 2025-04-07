export async function GET() {
  try {
    console.log("🔍 Checking environment variables:");
    console.log("🔹 Device ID:", process.env.NEXT_PUBLIC_SHELLY_DEVICE_ID);
    console.log("🔹 Auth Key:", process.env.NEXT_PUBLIC_SHELLY_AUTH_KEY ? "Exists" : "Missing");
    console.log("🔹 Server URI:", process.env.NEXT_PUBLIC_SHELLY_CLOUD_SERVER_URI);

    const deviceId = process.env.NEXT_PUBLIC_SHELLY_DEVICE_ID;
    const authKey = process.env.NEXT_PUBLIC_SHELLY_AUTH_KEY;
    const serverUri = process.env.NEXT_PUBLIC_SHELLY_CLOUD_SERVER_URI;

    if (!deviceId || !authKey || !serverUri) {
      console.error("❌ Missing environment variables");
      return new Response(JSON.stringify({ error: "Missing environment variables" }), { status: 500 });
    }

    const url = `https://${serverUri}/device/status?id=${deviceId}&auth_key=${authKey}`;
    console.log(`🔍 Fetching URL: ${url}`);

    const response = await fetch(url);
    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Shelly Cloud API error:", response.status, errorText);
      return new Response(JSON.stringify({ error: `Shelly API error: ${response.status}` }), { status: response.status });
    }

    const data = await response.json();
    console.log("✅ Shelly API response:", data);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    console.error("❌ Error fetching from Shelly Cloud:", error);
    return new Response(JSON.stringify({ error: `Server error: ${error.message}` }), { status: 500 });
  }
}
