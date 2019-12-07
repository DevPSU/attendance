# This program splits a message into slices, then encodes each slice within a qr code
# these qr codes are then combined into one gif
import pyqrcode
import imageio
import os

messageSlices = []
images = []
message = input("Message: ")

# Place number of slices at start of list
messageSlices.append("")


# Split the message into numSlices slices and add to list
# each slice qr code can only represent 7 charachters before changing size
charAdded = 0
i = 0
while charAdded < len(message):
    if i < 10:
        sliceLength = 6
    elif 10 <= i < 100:
        sliceLength = 5
    elif 100 <= i < 1000:
        sliceLength = 4
    messageSlices.append(str(i) + message[i * sliceLength: (i + 1) * sliceLength])
    i += 1
    charAdded += sliceLength
messageSlices[0] = i

# Create a list of QR codes then stitch them together into a gif
for piece in messageSlices:
    # Creates png gr code representing each slice and adds it to images list
    qr = pyqrcode.create(piece)
    qr.png("QR.png", scale=36, module_color=[0x00, 0x33, 0x66], background=[214, 254, 254, 255])
    images.append(imageio.imread("QR.png"))
    images.append(imageio.imread("QR.png"))
    os.remove('QR.png')

# Joins the list of pngs to a gif
imageio.mimsave('/Users/natanberehe/Desktop/GIFencoder/QRGIF.gif', images)
