echo "Sending..."

aws s3 sync website s3://homebox.com/

echo "Done!"