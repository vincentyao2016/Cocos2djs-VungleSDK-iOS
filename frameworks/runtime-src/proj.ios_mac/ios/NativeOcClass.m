//
//  NativeOcClass.m
//  projectName
//
//  Created by Vincent.yao on 8/25/16.
//
//

#import "NativeOcClass.h"
#import "AppController.h"

@implementation NativeOcClass
+(BOOL)callNativeLog{
    NSLog(@"LOG FROM OC");
    // Play a Vungle ad (with default options)
    VungleSDK* sdk = [VungleSDK sharedSDK];
    
    NSError *error;
    UIViewController *rootViewController = (UIViewController*)[[[UIApplication sharedApplication] keyWindow] rootViewController];
    
    [sdk playAd:rootViewController error:&error];
    if (error) {
        NSLog(@"Error encountered playing ad: %@", error);
    }
    
    return YES;
    
}

@end
