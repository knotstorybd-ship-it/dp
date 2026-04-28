import { createBrowserRouter, Navigate } from "react-router";
import { RootLayout } from "./layouts/RootLayout";
import { HomePage } from "./pages/HomePage_Premium";
import { BrowsePage } from "./pages/BrowsePage";
import { BookDetailPage } from "./pages/BookDetailPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AuthorPage } from "./pages/AuthorPage";
import { AdminDashboardPage } from "./pages/AdminDashboardPage";
import { AuthorDashboardPage } from "./pages/AuthorDashboardPage";
import { WriterRegistrationPage } from "./pages/WriterRegistrationPage";

import { ErrorPage } from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorPage />,
    children: [
      { index: true, Component: HomePage },
      { path: "browse", Component: BrowsePage },
      { path: "book/:id", Component: BookDetailPage },
      { path: "writer", Component: AuthorDashboardPage }, // Point to the premium Author dashboard
      { path: "join-writer", Component: WriterRegistrationPage },
      { path: "author-dashboard", element: <Navigate to="/writer" replace /> }, // Redirect old path
      { path: "checkout", Component: CheckoutPage },
      { path: "author/:name", Component: AuthorPage },
      { path: "admin", Component: AdminDashboardPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
]);
