import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import  getUserProfile  from "@/libs/getUserProfile";
import BookingForm from "@/components/BookingForm";
import { Box, Typography, Paper } from "@mui/material";

export default async function BookingPage() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <Typography variant="h5" className="text-gray-700">
          Please sign in to make a booking.
        </Typography>
      </main>
    );
  }

  const profileResponse = await getUserProfile(session.user.token as string);
  const profile = profileResponse?.data || null;

  return (
    <Box className="p-6 md:p-10 flex flex-col items-center">
      {profile && (
        <Paper
          elevation={3}
          className="w-full max-w-2xl p-6 mb-10 rounded-2xl bg-gradient-to-br from-indigo-50 to-white"
        >
          <Typography variant="h5" className="font-bold mb-4 text-indigo-700">
            User Profile
          </Typography>
          <Box className="grid grid-cols-1 md:grid-cols-2 gap-y-2">
            <Typography><strong>Name:</strong> {profile.name}</Typography>
            <Typography><strong>Email:</strong> {profile.email}</Typography>
            <Typography><strong>Tel:</strong> {profile.tel}</Typography>
            <Typography>
              <strong>Member Since:</strong>{" "}
              {new Date(profile.createdAt).toLocaleDateString()}
            </Typography>
          </Box>
        </Paper>
      )}

      <BookingForm profile={profile} />
    </Box>
  );
}
