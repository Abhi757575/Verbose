import os
from supabase import Client, create_client
from dotenv import load_dotenv

load_dotenv()

supabase: Client = create_client(
    os.environ.get("SUPABASE_URL"),
    os.environ.get("SUPABASE_KEY")
)

#insert a new row into the demo_table
#new_row = {'first_name': 'John'}
#supabase.table('demo_table').insert(new_row).execute()
#new_row = {'first_name': 'Jane'}
#supabase.table('demo_table').update(new_row).eq('id', 2).execute()
supabase.table('demo_table').delete().eq('id', 1).execute()

results = supabase.table('demo_table').select().execute()
print(results)
