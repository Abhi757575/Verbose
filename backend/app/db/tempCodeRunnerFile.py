import os
from supabase import Client, create_client
from dotenv import load_dotenv

load_dotenv()

supabase: Client = create_client(
    os.environ.get("SUPABASE_URL"),
    os.environ.get("SUPABASE_KEY")
)

results = supabase.table('demo-table').select().execute()
print(results.data)
