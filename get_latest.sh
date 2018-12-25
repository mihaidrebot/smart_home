cd /home/pi
git clone https://github.com/mihaidrebot/smart_home.git
cd smart_home/
docker build -t mihaivoicudrebot/smart-home .

docker run --name=smart_home -p 8099:8080 -d mihaivoicudrebot/smart-home
cd /home/../