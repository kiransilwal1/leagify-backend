import psycopg2
from psycopg2 import sql
import os
import re
# Database connection parameters
DB_HOST = "localhost"
DB_NAME = "leagify"
DB_USER = "postgres"
DB_PASSWORD = "postgres"

# Function to create a table
def create_table():
    # Define your table name and columns
    table_name = 'player_team_pivot'
    columns = [
'id UUID PRIMARY KEY DEFAULT uuid_generate_v4()',
    'player_id UUID NOT NULL REFERENCES public.players(id)',
    'team_id UUID NOT NULL REFERENCES public.teams(id)',
    'from_date TIMESTAMP NOT NULL',
    'to_date TIMESTAMP'
    ]
    column_text = extract_column_names(columns=columns)
    sql_query = generate_placeholder_string(len(column_text))
    column_text = (',').join(column_text)
    print(f'sql_query : {sql_query}')
    print(f'column_text : {column_text}')
    # SQL statement to create a table

    create_js_files(folder_path=f'./src/api/v1/{table_name}s/',table_name=table_name,column_text=column_text,add_row_text=sql_query)
    create_table_query = sql.SQL(
        'CREATE TABLE IF NOT EXISTS {} ( {} )'
    ).format(
        sql.Identifier(f'{table_name}s'),
        sql.SQL(', ').join(map(sql.SQL, columns))
    )

    # Connect to the database
    conn = None
    try:
        conn = psycopg2.connect(
            host=DB_HOST,
            dbname=DB_NAME,
            user=DB_USER,
            password=DB_PASSWORD
        )

        # Create a new database session and return a new instance of the cursor
        cur = conn.cursor()

        # Execute the SQL command
        cur.execute(create_table_query)

        # Commit the transaction
        conn.commit()

        # Close the communication with the PostgreSQL database
        cur.close()
        
        print(f"Table '{table_name}' created successfully.")
    except (Exception, psycopg2.DatabaseError) as error:
        print(f"Error: {error}")
    finally:
        if conn is not None:
            conn.close()
            
def extract_column_names(columns):
    column_names = []
    for column in columns:
        match = re.search(r'(\w+)', column)
        if match:
            column_name = match.group(1)
            if column_name.lower() != "id":
                column_names.append(column_name)
    return column_names

def generate_placeholder_string(length):
    placeholders = ','.join(['${}'.format(i) for i in range(1, length + 1)])
    return '({})'.format(placeholders)


def convert_text(text):
    def replace_match(match):
        word = match.group()
        if len(word) > 1:
            return word[:-1].capitalize()  # Remove last letter and capitalize first letter
        return word.capitalize()  # Just capitalize if it's a single character (fallback, though won't be used here)

    pattern = re.compile(re.escape('roles'), re.IGNORECASE)
    return pattern.sub(replace_match, text)


def create_js_files(folder_path,table_name,column_text,add_row_text):
    print(f'Creating folder {folder_path}')
    # Ensure the folder exists, if not create it
    if not os.path.exists(folder_path):
        os.makedirs(folder_path)
    files = ['controller.js','routes.js','queries.js']
    for file_name in files:
        destination_file = os.path.join(folder_path, file_name)
        replace_texts(file_path=f'./src/api/v1/games/{file_name}',destination_path=destination_file,table_name=convert_text(table_name),column_text=column_text,add_row_text=add_row_text)

    # file_name = "routes.js"
    # file_path = os.path.join(folder_path, file_name)
    # with open(file_path, 'w') as file:
    #     if content:
    #         file.write(content)
    #     else:
    #         file.write(f"// JavaScript file\n")
        
    #     print(f"Created {file_path}")

    # file_name = "queries.js"
    # file_path = os.path.join(folder_path, file_name)
    # with open(file_path, 'w') as file:
    #     if content:
    #         file.write(content)
    #     else:
    #         file.write(f"// JavaScript file\n")
        
    #     print(f"Created {file_path}")
def replace_substrings(text, old_values, new_values):
    replacements = dict(zip(old_values, new_values))
    
    def replace_match(match):
        word = match.group()
        return replacements.get(word, word)
    
    pattern = re.compile('|'.join(re.escape(word) for word in old_values))
    return pattern.sub(replace_match, text)

def replace_texts(file_path, destination_path, table_name,column_text,add_row_text):
   
    with open(file_path, 'r') as file:
        content = file.read()
    content = replace_text_preserve_case(content,'game',table_name)
    content = replace_text_preserve_case(content, 'date_time','name')
    content = replace_text_preserve_case(content,'team_id_1 , team_id_2 , name , location , league_id',column_text)
    content = replace_text_preserve_case(content,'($1,$2,$3,$4,$5)',add_row_text)
    # Comprehensive pattern to match different case variations of "Game" and "game

    with open(destination_path, 'w') as file:
        file.write(content)

    print(f"Replaced 'Game' with '{table_name}' in {destination_path}")# Example usage

def replace_text_preserve_case(text, old, new):
    def replace_case_sensitive(match):
        word = match.group()
        if word.islower():
            return new.lower()
        elif word.isupper():
            return new.upper()
        elif word[0].isupper():
            return new.capitalize()
        else:
            return new
    
    pattern = re.compile(re.escape(old), re.IGNORECASE)
    return pattern.sub(replace_case_sensitive, text)



if __name__ == '__main__':
    create_table()


