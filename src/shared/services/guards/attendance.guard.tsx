// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { useAuth } from "@/hooks/useAuth";

// export const AttendanceGuard = () => {
//   const { isAttendanceWorkerUser } = useAuth();
//   const location = useLocation();

//   const allowedPaths: string[] = [
//     "/attendance-worker",
//     "/attendance-worker/marking",
//   ];

//   const isAllowedPath: boolean = allowedPaths.some((path) =>
//     location.pathname.startsWith(path)
//   );

//   if (!isAttendanceWorkerUser() || !isAllowedPath) {
//     return <Navigate to="/access-denied-attendance" />;
//   }

//   return <Outlet />;
// };

// *********RELOCATE**********
