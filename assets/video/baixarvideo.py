from pytube import YouTube
from moviepy.video.io.ffmpeg_tools import ffmpeg_extract_subclip

# Insira o link do YouTube que você deseja baixar
url = "https://www.youtube.com/watch?v=HcfJEKhyy9A"

# Crie um objeto YouTube
yt = YouTube(url)

# Selecione a qualidade desejada (720p)
video = yt.streams.filter(res="720p", file_extension="mp4").first()

# Faça o download do vídeo
video.download()

print("Download concluído!")

# Especifique o intervalo de tempo em segundos (por exemplo, de 2 minutos a 5 minutos)
start_time = 563 # 2 minutos em segundos
end_time = 576    # 5 minutos em segundos

# Nome do arquivo original e o arquivo de saída
original_filename = video.default_filename
output_filename = "florDelicada.mp4"

# Use o moviepy para cortar o vídeo
ffmpeg_extract_subclip(original_filename, start_time, end_time, targetname=output_filename)

print("Vídeo cortado com sucesso!")