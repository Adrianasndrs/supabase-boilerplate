// Add JavaScript below

import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.8.0"

const supabaseUrl = 'https://inknxseidrqgytxnrkfo.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlua254c2VpZHJxZ3l0eG5ya2ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzcyNzI5NDMsImV4cCI6MTk5Mjg0ODk0M30.QaJ6R0eJpAliALLVtHUtNCJfNHM3NrQOn_E68R79ETQ'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks(){
  let { data: books, error } = await supabase
  .from('books')
  .select('*')

for (let book of books){
  let bookList = document.getElementById('books');
  bookList.innerHTML += `<tr><td>${book.title} </td><td> ${book.author}</td></tr> `;
  }
}

getBooks();