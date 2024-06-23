import mysql.connector
import requests

# Function to retrieve posts from the MySQL database
def get_posts(connection):
    cursor = connection.cursor(dictionary=True)
    cursor.execute("SELECT * FROM posts")
    posts = cursor.fetchall()
    cursor.close()
    return posts

# Connection parameters
db_config = {
    'host': 'srv1364.hstgr.io',
    'user': 'u450297898_temuekspornext',
    'password': 'Hoodwink77!',  # Replace with your actual password
    'database': 'u450297898_temuekspornext'
}

try:
    connection = mysql.connector.connect(**db_config)
    print("Authenticated successfully. connection:", connection)
    if connection.is_connected():
        print("Connected to the MySQL database")

        posts = get_posts(connection)
        for post in posts:
            print(f"ID: {post['post_id']}, Title: {post['post_title']}, Price: {post['post_price']}")
            print(f"Post category: {post['post_category']}, Discount: {post['post_discount']}")
            is_discount = "Yes" if post['post_discount'] == 1 else "No"
            print(f"Is discount: {is_discount}")

        connection.close()

except Exception as e:
    print("Error:", str(e))
