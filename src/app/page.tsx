import {
  HydrationBoundary,
  dehydrate,
  QueryClient,
} from "@tanstack/react-query";
import { productService } from "@/services/productService";
import ProductList from "../components/ProductList";
import { ProtectedRoute } from "@/components/ProtectedRouter";

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["products"],
    queryFn: productService.list,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProtectedRoute>
        <ProductList />
      </ProtectedRoute>
    </HydrationBoundary>
  );
}
