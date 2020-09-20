/**
 * This file was auto-generated by swagger-to-ts.
 * Do not make direct changes to the file.
 */

export interface definitions {
  ApiResponse: { code?: number; type?: string; message?: string };
  Category: { id?: number; name?: string };
  Pet: {
    id?: number;
    category?: definitions["Category"];
    name: string;
    photoUrls: string[];
    tags?: definitions["Tag"][];
    /**
     * pet status in the store
     */
    status?: "available" | "pending" | "sold";
  };
  Tag: { id?: number; name?: string };
  Order: {
    id?: number;
    petId?: number;
    quantity?: number;
    shipDate?: string;
    /**
     * Order Status
     */
    status?: "placed" | "approved" | "delivered";
    complete?: boolean;
  };
  User: {
    id?: number;
    username?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
    phone?: string;
    /**
     * User Status
     */
    userStatus?: number;
  };
}
