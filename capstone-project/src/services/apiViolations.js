import supabase from "./supabase";

export default async function getViolations() {
  const { data, error } = await supabase.from("violations").select("*");

  if (error) {
    console.error(error);
    throw new Error("Violations could not be loaded");
  }

  return data;
}
