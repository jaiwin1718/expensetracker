provider "aws" {
  region = var.region
}

resource "aws_s3_bucket" "tflogbucket" {
  bucket = var.bucket_name
}

variable "bucket" {}
variable "region" { default = "us-east-1" }

resource "aws_s3_bucket" "tfbucket" {
  bucket = var.bucket_name

  tags = {
    Name        = var.bucket_name
    Environment = "Dev"
  }
}
