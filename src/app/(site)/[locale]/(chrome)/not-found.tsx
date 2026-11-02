import NotFoundPage from "@/components/NotFoundPage";

/* Shown whenever a page inside the main site calls notFound(), such as an
   experience or guide address that does not exist. It renders inside the
   (chrome) layout, so the navbar and footer stay. */
export default function NotFound() {
    return <NotFoundPage />;
}