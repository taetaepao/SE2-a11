export default async function getUserProfile(token: string) {
  try {
    const res = await fetch("https://a08-venue-explorer-backend.vercel.app/api/v1/auth/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error("Failed to fetch profile");

    return await res.json();
  } catch (error) {
    console.error("Profile error:", error);
    return null;
  }
}
