provider "aws" {
  region = var.region
}

resource "aws_s3_bucket" "CI_CD" {
  bucket = var.bucket_name
}

variable "bucket_name" {}
variable "region" { default = "us-east-1" }

resource "aws_s3_bucket" "demo_bucket" {
  bucket = var.bucket_name

  tags = {
    Name        = var.bucket_name
    Environment = "Dev"
  }
}
