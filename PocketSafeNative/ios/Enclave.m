//
//  Enclave.m
//  PocketSafeNative
//
//  Created by Shaunak Kale on 9/23/23.
//





#import <React/RCTBridgeModule.h>
#import <Foundation/Foundation.h>
#import <LocalAuthentication/LocalAuthentication.h>
#import <Security/Security.h>
#import <React/RCTConvert.h>

@interface RCT_EXTERN_MODULE(Enclave, NSObject)

// getPublicKey
RCT_EXTERN_METHOD(getPublicKey:(NSString)alias
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

// generateKeyPair
RCT_EXTERN_METHOD(generateKeyPair:(NSString)alias
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

// deleteKeyPair
RCT_EXTERN_METHOD(deleteKeyPair:(NSString)alias
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)

// signMessage
RCT_EXTERN_METHOD(signMessage:(NSString)alias
                  message:(NSString)message
                  resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)


- (id)init
{
  if (self = [super init]) {
    [[NSNotificationCenter defaultCenter] addObserver:self
                                             selector:@selector(cameraChanged:)
                                             name:@"AVCaptureDeviceDidStartRunn ingNotification"
                                             object:nil];
  }
  return self;
}

// Please add this one
+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end

