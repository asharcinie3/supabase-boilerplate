import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.21.0";

const supabaseUrl = "https://mdvirtqipuyfbmlnjfko.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1kdmlydHFpcHV5ZmJtbG5qZmtvIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY3OTM3ODUyMywiZXhwIjoxOTk0OTU0NTIzfQ.v5cN90MvlDKEUSL2pguG-Ste6166wb90i6vWTpO7kf4";
const supabase = createClient(supabaseUrl, supabaseKey);

async function getBooks() {
  let { data: books, error } = await supabase.from("books").select("*");

  for (let book of books) {
    let bookList = document.getElementById("books");
    bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td></rt>`;
  }
}

getBooks();
