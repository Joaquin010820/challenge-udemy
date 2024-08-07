import supabase from "./supabase";

export default async function getViolations() {
  const { data, error } = await supabase.from("reports").select("*");

  if (error) {
    console.error(error);
    throw new Error("Reports could not be loaded");
  }

  return data;
}
